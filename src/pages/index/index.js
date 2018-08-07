import React, { Component } from 'react';
import qs from 'qs'

import './style.css'

import { dwz } from '../../api'
import { dataList, targetY, targetX, info, pageFoot  } from '../../data/index.js'

import retext from '../../data/retext.js'
import changeTitle from '../../api/changeTitle.js'
import Edi from './isEdi';
import Pre from './pre'

let text = retext('小白','阿狸')
changeTitle(text.t11[0])
let writeTipArr = [
      '小提示：点击文字可以进行编辑，点击右下角心形可以跳跃浏览 ',
      '小提示：编辑完成后点击保存修改，发送给你的亲亲开始表白吧！',
]



class App extends Component {
  state = {
    wrap:[],
    _x:0,
    _y:0,
    seeXY:{
      _x:0,
      _y:0,
    },
    music: './static/music/lovebgm.mp3',
    text:text,
    finish:{},
    dataList:dataList.slice(0),
    fixdList:dataList.slice(0),
    isEdi: false,
    writeTipArr,
    writeTip: writeTipArr[ 0 ] ,
    EdiTost: false,
    seeAll: false,
  }
  render() { 
    return (
      <div className={ this.state.seeAll ? "seeAll" : 'lwrap' }>
        {!this.state.EdiTost ? 
          <div className="love" style={{transform: `translate(-${ this.state._x * 100}%,-${ this.state._y * 100}%) scale(${ this.state.seeAll ? .1 : 1 })`}}>
            {dataList.map( (item,index)=>(
              <div className="column" key={index}>
                { item.map( (i,idx) =>(
                  <div className={'page ' + i.t} key={i.t} style={{ backgroundImage: `url(${i.i}),url(${i.bg })`}}>
                    <Edi 
                      flag={ this.state.isEdi }
                      id={ i.t }
                      text={ this.state.text[ i.t ]}
                      change={ this.changeText.bind(this) }
                    />
                    
                    {!idx && !index ? <div><p>{ pageFoot.start }</p><Pre flag={ this.state.isEdi } list={ info } /></div> : "" }
                    { i.t === "t94" ? <h3>{ pageFoot.end }</h3> : ""}
                  </div>
                ) )}
              </div>
            ))}
          </div>
        : ""}

        { !this.state.seeAll ? <div className="fixd">
          {this.state.fixdList.map((item, index) => (
            <div className="col" key={index}>
              {item.map((i, idx) => (
                <div className={i.isActivity ? 'row isActivity' : 'row'} onClick={this.setXY.bind(this, index, idx) } key={ idx }>
                </div>
              ))}
            </div>
          ))}
        </div> : ''}

        {this.state.isEdi ? 
          <div className="write-tip">
            <span>{ this.state.writeTip }</span>
            <button className="write-btn" onClick={ this.ediTost.bind(this) }>保存修改</button>
          </div> 
        : ""}
        {this.state.EdiTost ? 
          <div className="edi_tost">
            <h3>还差一步即可生成表白页面</h3>
            <div>音乐：</div>
            <div>默认歌曲为【爱一点-王力宏】</div>
            <div>自定义表白链接</div>
            <div>
              <div>重新修改</div>
              <div> ❤ 生成表白页面</div>
            </div>
          </div>
        : ""}
        <audio id="bgmMusic" src={this.state.music} preload="auto" type="audio/mp3" autoPlay loop></audio>
      </div>
    );
  }
  componentDidMount(){
    let route = this.props.match.params.edi;
    let num = 0;
    route === 'edi' && this.setState({ isEdi: true }), setInterval(() => {
      this.setState({ writeTip: this.state.writeTipArr[num % 2] });
      num++ > 1000 && (num = 0)
    }, 3000);
    route === 'reset' && this.reset();
    !route && this.getText();
    this.position();
    this.isActivity(0,0);
  }
  reset(){
    let str = this.props.location.search.split("?")[1],
    toHref = () => {
      let boy = prompt('请输入boy');
      let girl = prompt('请输入girl')
      if (boy && girl) {
        let { origin, pathname } = window.location;
        window.location.href = origin + pathname + '#/reset' + '?boy=' + encodeURI(encodeURI(boy)) + '&girl=' + encodeURI(encodeURI(girl));
      }
    }
    
    if (str === undefined){
      toHref();
    }else{
      let obj = qs.parse(str);
      if( obj.boy && obj.girl ){
        let boy = decodeURI(decodeURI( obj.boy )),
          girl = decodeURI(decodeURI( obj.girl ));
        let text = retext( boy, girl )
        this.setState({ text })
      }else{
        toHref();
      }
    };
  }
  getText(){
    let str = this.props.location.search.split("?")[1];
    if(str === undefined ) return;
    let targetObj = {};
    Object.assign(targetObj, text, qs.parse(str))
    this.setState({ text: targetObj })
    changeTitle(targetObj.t11[0])
    console.log("获取到内容")
  }
  ediTost(){
    this.setState({ EdiTost: true })
  }
  sendUrl(){ // 未找到短网址api 暂停此项内容
    let str = qs.stringify(this.state.finish);
    dwz( str, data =>{
      console.log("请求成功", data )
    })
  }
  setXY(_x,_y){
    this.setState({ _x, _y })
    this.isActivity(_x,_y)
    console.log("点击坐标===>",[_x+1,_y+1])
    this.sendUrl();
  }
  isActivity(_x,_y){
    let tmp = this.state.fixdList;
    tmp.map( item => item.map( itm => itm.isActivity = false ))
    tmp[_x][_y]['isActivity'] = true;
    this.setState({ fixdList: tmp })
  }
  changeText(num,e){ 
    let value = e.target.value;
    let str = value.indexOf("data-") + 5;
    let content = value.slice(value.indexOf(">") + 1 , value.lastIndexOf("</"));
    let key = value.slice(str, str + 3);
    let { finish } = this.state;
    finish[ key ] = [];
    finish[ key ][ num ] = content;
    this.setState({ finish })
  }
  position(){
    let _this = this;

    if (document.addEventListener) {
      document.addEventListener("keyup", fnKeyup, true);
    } else {
      document.attachEvent("onkeyup", fnKeyup);
    }
    function fnKeyup(e) {
      var { _x, _y } = _this.state;
      let _Y = targetY[_x];
      let MaxY = targetY.slice(-1)[0];
      let MaxX = targetX[MaxY];
      
      if ( e.keyCode === 27 ){  // 查看全局设置
        if( !_this.state.seeAll ){
          _this.setState({ seeXY:{ _x, _y },_x: .4, _y: .4, seeAll: true });
        }else{
          var { _x, _y } = _this.state.seeXY;
          _this.setState({ _x, _y, seeAll: false })
        }
      }

      if( _this.state.seeAll ) return; // 查看全局时，不进行以下操作

      if (e.keyCode === 38) { // 上下左右边界判定
        console.log('↑')
        _y = _y - 1 < 0 ? !_x ? _y : (_x-- , targetY[_x]) : _y - 1;
      } else if (e.keyCode === 37) {
        console.log("←")
        !((_x === 1 && (_y === 4 || _y === 5)) || !_x || (_x === 2 && _y === 6)) && _x--;
      } else if (e.keyCode === 39) {
        console.log("→")
        !((_x === 7 && (_y === 4 || _y === 5)) || _x === 8 || (_x === 6 && _y === 6)) && _x++;
      } else if (e.keyCode === 40) {
        console.log('↓')
        _y = _y + 1 > _Y ? _x === MaxX && _y === MaxY ? _y : (_x++ , 0) : _y + 1;
      }
      _this.setState({ _x, _y })
      _this.isActivity(_x,_y)
      console.log("坐标===>", [_x + 1, _y + 1], )
      console.log(_this.state.finish)
    }
  }
}

export default App;

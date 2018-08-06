let hostimg = '/static/img/'

export const init = [4, 6, 7, 7, 7, 7, 7, 6, 4];

export const list = ()=>{
    let arr = [];
    let arr2 = [];
    for (let i = 0; i < 9; i++) {
        arr2 = [];
        for (let j = 0; j < init[i]; j++) {
            arr2.push({ t: `t${i + 1}${j + 1}`, i: `iali${i + 1}${j + 1}.jpg` })
        }
        arr.push(arr2)
    }
    return arr;
}

export const pageFoot = {
    start: `按键盘 "↓" 倾听我的爱情告白`,
    end: `-- 按“Esc"键有惊喜`
}

export const info = `
修改方法：按 "↓"向下修改每一个图片上的文字为你所要表白的文字即可 （背景音乐最后一步更改）

只要在本页将所有表白的文字改成您自己对爱人的表白文字，然后点保存生成属于您独一无二专有的个人表白网页！

只要记住您专属的表白网页网址，在全世界能上网的地方就能看到您的爱情表白誓言！

是不是心动了？那就来试试效果吧！！

(这里字可以忽略，生成网页不会有！)`

export const targetX = [ 8, 8, 8, 8, 6, 6, 4];

export const targetY = [ 3, 5, 6, 6, 6, 6, 6, 5, 3 ];

export const dataList = [
    [
        { t: "t11", i: hostimg + "iali11.jpg"},
        { t: "t12", i: hostimg + "iali12.jpg" },
        { t: "t13", i: hostimg + "iali13.jpg" },
        { t: "t14", i: hostimg + "iali14.jpg" },
    ],
    [
        { t: "t21", i: hostimg + "iali21.jpg" },//
        { t: "t22", i: hostimg + "iali22.jpg" },
        { t: "t23", i: hostimg + "iali23.jpg" },
        { t: "t24", i: hostimg + "iali24.jpg" },
        { t: "t25", i: hostimg + "iali25.jpg" },
        { t: "t26", i: hostimg + "iali26.jpg", bg: hostimg + "iali26_bg.jpg" },
    ],
    [
        { t: "t31", i: hostimg + "iali31.jpg" },
        { t: "t32", i: hostimg + "iali32.jpg" },
        { t: "t33", i: hostimg + "iali33.jpg" },
        { t: "t34", i: hostimg + "iali34.jpg" },
        { t: "t35", i: hostimg + "iali35.jpg" },
        { t: "t36", i: hostimg + "iali36.jpg" },
        { t: "t37", i: hostimg + "iali37.jpg" },
    ],
    [
        { t: "t41", i: hostimg + "iali41.jpg" },
        { t: "t42", i: hostimg + "iali42.jpg", bg: hostimg + "iali42_bg.jpg" },
        { t: "t43", i: hostimg + "iali43.jpg" },
        { t: "t44", i: hostimg + "iali44.png", bg: hostimg + "iali44_bg.jpg" },
        { t: "t45", i: hostimg + "iali45.jpg" },
        { t: "t46", i: hostimg + "iali46.jpg" },
        { t: "t47", i: hostimg + "iali47.jpg" },
    ],
    [
        { t: "t51", i: hostimg + "iali51.jpg" },
        { t: "t52", i: hostimg + "iali52.gif" },
        { t: "t53", i: hostimg + "iali53.jpg" },
        { t: "t54", i: hostimg + "iali54.jpg", bg: hostimg + "iali54_bg.jpg" },
        { t: "t55", i: hostimg + "iali55.jpg" },
        { t: "t56", i: hostimg + "iali56.gif", bg: hostimg + "iali56_bg.png" },
        { t: "t57", i: hostimg + "iali57.jpg" },
    ],
    [
        { t: "t61", i: hostimg + "iali61.jpg" },
        { t: "t62", i: hostimg + "iali62.jpg" },
        { t: "t63", i: hostimg + "iali63.jpg" },
        { t: "t64", i: hostimg + "iali64.gif", bg: hostimg + "iali64_bg.png" },
        { t: "t65", i: hostimg + "iali65.jpg" },
        { t: "t66", i: hostimg + "iali66.jpg" },
        { t: "t67", i: hostimg + "iali67.jpg" },
    ],
    [
        { t: "t71", i: hostimg + "iali71.jpg", bg: hostimg + "iali71_bg.jpg" },
        { t: "t72", i: hostimg + "iali72.jpg" },
        { t: "t73", i: hostimg + "iali73_1.jpg", bg: hostimg + "iali73_2.jpg" },
        { t: "t74", i: hostimg + "iali74.jpg" },
        { t: "t75", i: hostimg + "iali75.jpg" },
        { t: "t76", i: hostimg + "iali76.jpg" },
        { t: "t77", i: hostimg + "iali77.jpg" },
    ],
    [
        { t: "t81", i: hostimg + "iali81.gif" },
        { t: "t82", i: hostimg + "iali82.jpg" },
        { t: "t83", i: hostimg + "iali83.jpg" },
        { t: "t84", i: hostimg + "iali84.jpg" },
        { t: "t85", i: hostimg + "iali85_1.jpg", bg: hostimg + "iali85_2.jpg" },
        { t: "t86", i: hostimg + "iali86.jpg" },
    ],
    [
        { t: "t91", i: hostimg + "iali91.jpg" },
        { t: "t92", i: hostimg + "iali92.jpg" },
        { t: "t93", i: hostimg + "iali93.jpg", bg: hostimg + 'iali93_bg.jpg' },
        { t: "t94", i: hostimg + "iali94.jpg" },
    ],
]
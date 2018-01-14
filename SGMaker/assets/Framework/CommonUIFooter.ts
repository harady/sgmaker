import { SceneManager } from "./SceneManager";

// Learn TypeScript:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/typescript/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class CommonUIFooter extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    }

    // update (dt) {},

    onClickMypage() {
        SceneManager.instance.changePageScene('');
    }

    onClickBattle() {
        SceneManager.instance.changePageScene('');
    }

    onClickMonster() {
        SceneManager.instance.changePageScene('');
    }

    onClickShop() {
        SceneManager.instance.changePageScene('');
    }

    onClickGacha() {
        SceneManager.instance.changePageScene('');
    }

    onClickFriend() {
        SceneManager.instance.changePageScene('');
    }
}

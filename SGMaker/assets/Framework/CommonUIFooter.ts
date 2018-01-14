const { ccclass, property } = cc._decorator;
import { SceneManager } from "./SceneManager";

@ccclass
export default class CommonUIFooter extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    }

    // update (dt) {},

    onClickMypage() {
        SceneManager.instance.changePageScene('MypagePageScene');
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

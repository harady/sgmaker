const { ccclass, property } = cc._decorator;
import CommonUIHeader from "./CommonUIHeader";
import CommonUIFooter from "./CommonUIFooter";

@ccclass
export default class CommonUI extends cc.Component {
    private static _instance: CommonUI = null;
    public static get instance(): CommonUI { return this._instance; }

    @property(CommonUIHeader)
    header: CommonUIHeader = null;

    @property(CommonUIFooter)
    footer: CommonUIFooter = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.log("onLoad " + this.name);
        CommonUI._instance = this;
        cc.game.addPersistRootNode(this.node);
    }

    start() {

    }

    // update (dt) {},
}

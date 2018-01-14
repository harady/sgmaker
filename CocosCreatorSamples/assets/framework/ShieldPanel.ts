const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    contentNode: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    }

    // update (dt) {},

    public show() {
        this.node.runAction(cc.fadeTo(0.2, 255));
    }

    public hide() {
        this.node.runAction(cc.fadeTo(0.2, 0));
    }
}

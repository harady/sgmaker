const { ccclass, property } = cc._decorator;

@ccclass
export class ShieldPanel extends cc.Component {
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

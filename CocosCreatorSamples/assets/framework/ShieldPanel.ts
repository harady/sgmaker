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

    }

    public hide() {

    }
}

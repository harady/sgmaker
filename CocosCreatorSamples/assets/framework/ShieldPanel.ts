const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Widget)
    contentWidget: cc.Widget = null;

    @property(cc.Sprite)
    bgSprite: cc.Sprite = null;

    @property(cc.Sprite)
    loadingSprite: cc.Sprite = null;

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

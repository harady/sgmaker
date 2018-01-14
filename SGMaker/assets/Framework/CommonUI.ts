import CommonUIHeader from "./CommonUIHeader";
import CommonUIFooter from "./CommonUIFooter";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(CommonUIHeader)
    header: CommonUIHeader = null;

    @property(CommonUIFooter)
    footer: CommonUIFooter = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    }

    // update (dt) {},
}

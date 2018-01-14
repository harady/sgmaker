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
export default class SampleCompoment extends cc.Component {
    @property(cc.Label)
    testLable: cc.Label;

    @property({ type: cc.Integer })
    myInteger = 1;

    @property
    myNumber = 0;

    @property
    myText = "";

    @property(cc.Node)
    myNode: cc.Node = null;

    @property
    myOffset = new cc.Vec2(100, 100);

    @property([cc.Node])
    public myNodes: cc.Node[] = [];

    @property([cc.Color])
    public myColors: cc.Color[] = [];

    @property
    _width = 100;

    @property
    get width1() {
        return this._width;
    }

    @property
    set width2(value) {
        cc.log('width changed');
        this._width = value;
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    }

    // update (dt) {},
}

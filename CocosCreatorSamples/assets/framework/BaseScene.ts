const { ccclass, property } = cc._decorator;
import { SceneManager } from './SceneManager';

@ccclass
export default class BaseScene extends cc.Component {
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

	onLoad() {
		cc.log('onLoad ' + this.name);
		cc.game.addPersistRootNode(this.node);
	}

	onClickTitle() {
		cc.log('onClickTitle');
		SceneManager.instance.changePageScene('TitlePageScene');
	}

	onClickTest() {
		cc.log('onClickTest');
		SceneManager.instance.changePageScene('TestPageScene');
	}

	onClickAdd() {
		cc.log('onClickAdd');
	}
}

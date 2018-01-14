const { ccclass, property } = cc._decorator;
import { SceneManager } from './SceneManager';
import SampleCompoment from './SampleCompoment';

@ccclass
export default class BaseScene extends cc.Component {
    @property(cc.Node)
    sampleNode: cc.Node;

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
		if(this.sampleNode.opacity == 0) {
			this.sampleNode.runAction(cc.fadeTo(1.0, 255));
		} else {
			this.sampleNode.runAction(cc.fadeTo(1.0, 0));
		}
	}
}

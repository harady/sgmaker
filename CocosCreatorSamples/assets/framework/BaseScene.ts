const { ccclass, property } = cc._decorator;
import { SceneManager } from './SceneManager';

@ccclass
export default class BaseScene extends cc.Component {
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

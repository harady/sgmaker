const { ccclass, property } = cc._decorator;
import { SceneManager } from './SceneManager';
import SampleCompoment from './SampleCompoment';
import LoadingManager from './LoadingManager';

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
		if(LoadingManager.instance.loading.node.opacity == 0) {
			LoadingManager.instance.loading.show();
		} else {
			LoadingManager.instance.loading.hide();
		}
	}
}

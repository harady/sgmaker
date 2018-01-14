const { ccclass, property } = cc._decorator;
import { SceneManager } from './SceneManager';
import { LoadingManager } from './LoadingManager';
import { SplashPageScene } from './SplashPageScene';
import { TitlePageScene } from './TitlePageScene';
import { TestPageScene } from './TestPageScene';
import { SceneRootBase } from './SceneRootBase';

@ccclass
export default class BaseScene extends SceneRootBase {
	onLoad() {
		cc.log('onLoad ' + this.name);
		cc.game.addPersistRootNode(this.node);
	}

	start() {
		this.changePangeScene('SplashPageScene');
	}

	onClickTitle() {
		cc.log('onClickTitle');
		this.changePangeScene('TitlePageScene');
	}

	onClickTest() {
		cc.log('onClickTest');
		this.changePangeScene('TestPageScene');
	}

	onClickAdd() {
		cc.log('onClickAdd');
		if (LoadingManager.instance.loading.node.opacity == 0) {
			LoadingManager.instance.loading.show();
		} else {
			LoadingManager.instance.loading.hide();
		}
	}
}

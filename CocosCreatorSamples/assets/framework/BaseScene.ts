const { ccclass, property } = cc._decorator;
import { SceneManager } from './SceneManager';
import { LoadingManager } from './LoadingManager';
import { SplashPageScene } from './SplashPageScene';
import { TitlePageScene } from './TitlePageScene';
import { TestPageScene } from './TestPageScene';

@ccclass
export default class BaseScene extends cc.Component {
	onLoad() {
		cc.log('onLoad ' + this.name);
		cc.game.addPersistRootNode(this.node);
	}

	start() {
		SceneManager.instance.changePageScene(SplashPageScene.toString());
	}

	onClickTitle() {
		cc.log('onClickTitle');
		SceneManager.instance.changePageScene(TitlePageScene.toString());
	}

	onClickTest() {
		cc.log('onClickTest');
		SceneManager.instance.changePageScene(TestPageScene.toString());
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

const { ccclass, property } = cc._decorator;
import { SceneRootBase } from "../../../Framework/SceneRootBase";
import { LoadingManager } from "../../../Framework/LoadingManager";

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

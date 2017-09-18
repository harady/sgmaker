const { ccclass, property } = cc._decorator;
import { SceneManager } from './SceneManager';

@ccclass
export default class BaseScene extends cc.Component {

	onLoad() {
		// init logic

	}

	onClickTitle() {
		cc.log('onClickTitle');
		SceneManager.instance.changePageScene();
	}

	onClickTest() {
		cc.log('onClickTest');
		SceneManager.instance.changePageScene();
	}
}

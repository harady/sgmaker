const { ccclass, property } = cc._decorator;
import { SceneManager } from './SceneManager';

@ccclass
export default class BaseScene extends cc.Component {

	onLoad() {
		cc.log('onLoad ' + this.name);
		// init logic

	}

	onClickTitle() {
		cc.log('onClickTitle');
		SceneManager.instance.changePageScene('TitlePageScene');
	}

	onClickTest() {
		cc.log('onClickTest');
		SceneManager.instance.changePageScene('TestPageScene');
	}
}

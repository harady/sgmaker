const { ccclass, property } = cc._decorator;
import { SceneManager } from "./SceneManager";

@ccclass
export class SceneRootBase extends cc.Component {
	onLoad() {
		// init logic

	}

	changePangeScene(name: string) {
		SceneManager.instance.changePageScene(name);
	}
}


const { ccclass, property } = cc._decorator;
import { PageSceneRoot } from './PageSceneRoot';

@ccclass
export class SceneManager extends cc.Component {
	private static _instance: SceneManager = null;
	public static get instance(): SceneManager { return this._instance; }


	private _currentPageScene: PageSceneRoot;
	public get currentPageScene(): PageSceneRoot { return this._currentPageScene; }
	private isLoadingScene: boolean;
	private currentSceneUrl: string;

	onLoad() {
		cc.log("onLoad " + this.name);
		SceneManager._instance = this;
		cc.game.addPersistRootNode(this.node);
	}

	public changePageScene(name: string) {
		this.loadScene(name);
	}

	public backPageScene() {
	}

	public loadScene(name: string) {
		cc.log("loadScene name=" + name);
		this.isLoadingScene = true;
		this.currentSceneUrl = name;
		cc.director.loadScene(name, this.onLoadSceneFinish.bind(this));
	}

	private onLoadSceneFinish() {
		cc.log("onLoadSceneFinish");
		let url = this.currentSceneUrl;
		this.isLoadingScene = false;
	}
}


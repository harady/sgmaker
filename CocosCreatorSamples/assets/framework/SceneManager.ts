
module sgfw {
	const { ccclass, property } = cc._decorator;

	@ccclass
	export class SceneManager extends cc.Component {
		private _currentPageScene: PageSceneRoot;
		public get currentPageScene(): PageSceneRoot { return this._currentPageScene; }
		private isLoadingScene: boolean;
		private currentSceneUrl: string;

		onLoad() {
			// init logic

		}

		public changePageScene() {
		}

		public backPageScene() {
		}

		public loadScene(url: string) {
			cc.log("loadScene url=" + url);
			this.isLoadingScene = true;
			this.currentSceneUrl = url;
			cc.director.loadScene(url, this.onLoadSceneFinish.bind(this));
		}

		private onLoadSceneFinish() {
			cc.log("onLoadSceneFinish");
			let url = this.currentSceneUrl;
			this.isLoadingScene = false;
		}
	}
}

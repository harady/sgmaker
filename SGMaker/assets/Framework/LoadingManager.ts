const { ccclass, property } = cc._decorator;
import { ShieldPanel } from './ShieldPanel';

@ccclass
export class LoadingManager extends cc.Component {
	private static _instance: LoadingManager = null;
	public static get instance(): LoadingManager { return this._instance; }

	@property(ShieldPanel)
    loading: ShieldPanel;
    
	onLoad() {
		cc.log("onLoad " + this.name);
		LoadingManager._instance = this;
		cc.game.addPersistRootNode(this.node);
	}
}
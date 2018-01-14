
const { ccclass, property } = cc._decorator;
import { ShieldPanel } from './ShieldPanel';

@ccclass
export default class ShieldManager extends cc.Component {
	private static _instance: ShieldManager = null;
	public static get instance(): ShieldManager { return this._instance; }

	@property(ShieldPanel)
	whiteShield: ShieldPanel;

	@property(ShieldPanel)
	blackShield: ShieldPanel;

	@property(ShieldPanel)
	clearShield: ShieldPanel;

	onLoad() {
		cc.log("onLoad " + this.name);
		ShieldManager._instance = this;
		cc.game.addPersistRootNode(this.node);
	}
}

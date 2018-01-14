const { ccclass, property } = cc._decorator;

@ccclass
export default class ShieldManager extends cc.Component {
	onLoad() {
		cc.log("onLoad " + this.name);
		cc.game.addPersistRootNode(this.node);
	}

	showShield() {

	}

	hideShield() {

	}
}

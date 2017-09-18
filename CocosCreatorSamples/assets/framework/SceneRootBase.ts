
module sgfw {
	const { ccclass, property } = cc._decorator;

	@ccclass
	export class SceneRootBase extends cc.Component {

		@property(cc.Label)
		label: cc.Label;

		@property({
			default: 'hello'
		})
		text: string = 'hello';

		onLoad() {
			// init logic

		}
	}
}

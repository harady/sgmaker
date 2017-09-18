
module sgfw {
	const { ccclass, property } = cc._decorator;

	@ccclass
	export class PageSceneRoot extends SceneRootBase {

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

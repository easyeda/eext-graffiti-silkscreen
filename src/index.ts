import * as extensionConfig from '../extension.json';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function activate(status?: 'onStartupFinished', arg?: string): void {}

export function about(): void {
	eda.sys_MessageBox.showInformationMessage(
		eda.sys_I18n.text('Graffiti-Silkscreen v', undefined, undefined, extensionConfig.version) + '\n' + extensionConfig.description,
		eda.sys_I18n.text('About'),
	);
}

export function tuYaWindow(): void {
	eda.sys_IFrame.openIFrame('/iframe/index.html', 540, 680);
}

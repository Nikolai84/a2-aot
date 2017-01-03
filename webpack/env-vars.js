let ENV = process.env.npm_lifecycle_event;
let envMap =
	{
		'start': {
			API_URL: 'http://dev.url',
			ENV: 'dev',
		},
		'build-prod': {
			API_URL: 'http://prod.url',
			ENV: 'prod',
		},
		'build-stage': {
			API_URL: 'http://stage.url',
			ENV: 'stage',
		},
		'build': {
			API_URL: 'http://prod.url',
			ENV: 'prod'
		}
	};
const ENV_CONFIG = envMap[ENV] || envMap['start'];
const notDevEnv = ENV_CONFIG.ENV !== 'dev';
const isDev = ENV_CONFIG.ENV === 'dev';
const isProd = (ENV_CONFIG.ENV !== 'dev') && (ENV_CONFIG.ENV !== 'stage');
const isStage =  ENV_CONFIG.ENV === 'stage';

module.exports = {
	ENV_CONFIG,
	notDevEnv,
	isDev,
	isProd,
	isStage
};


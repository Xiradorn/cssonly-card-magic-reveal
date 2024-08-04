import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd());

	return {
		server: {
			port: env.VITE_SERVER_PORT,
		},

		base: ''
	};
});

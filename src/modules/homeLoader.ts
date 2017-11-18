import * as monitor from 'express-status-monitor';
import { MicroframeworkSettings, MicroframeworkLoader } from 'microframework';
import { env } from '../core/env';


export const homeLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if (settings) {
        const expressApp = settings.getData('express_app');
        expressApp.use(monitor());
        expressApp.get(
            env.app.routePrefix,
            (req: myExpress.Request, res: myExpress.Response) => {
                return res.json({
                    name: env.app.name,
                    version: env.app.version,
                    description: env.app.description
                });
            }
        );

    }
};

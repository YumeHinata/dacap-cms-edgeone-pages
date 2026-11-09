export async function onRequest(context) {
    const {
        request,
        env,
        params,
        waitUntil,
        next,
        data,
    } = context;
    const client_id = context.env.GITHUB_CLIENT_ID;
    const siteDomain = context.env.SITE_DOMAIN;
    try {
        const url = new URL(request.url);
        const origin = siteDomain
            ? new URL(siteDomain.includes('://') ? siteDomain : `https://${siteDomain}`).origin
            : url.origin;
        const redirectUrl = new URL('https://github.com/login/oauth/authorize');
        redirectUrl.searchParams.set('client_id', client_id);
        redirectUrl.searchParams.set('redirect_uri', origin + '/callback');
        redirectUrl.searchParams.set('scope', 'repo user');
        const stateArray = new Uint8Array(12);
        crypto.getRandomValues(stateArray);
        const state = Array.from(stateArray, byte => byte.toString(16).padStart(2, '0')).join('');
        redirectUrl.searchParams.set('state', state);
        return Response.redirect(redirectUrl.href, 301);
    } catch (error) {
        console.error(error);
        return new Response(error.message, {
            status: 500,
        });
    }
}
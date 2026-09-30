const REALM = 'Flood Map Viewer';
 
export async function onRequest(context) {
 
if (!context.request.headers.has('authorization')) {
return unauthorized();
}
 
const authorization =
context.request.headers.get('authorization');
 
const plainAuth =
atob(authorization.split(' ')[1]);
 
const [username, password] =
plainAuth.split(':');
 
if (
username !== context.env.USERNAME ||
password !== context.env.PASSWORD
) {
return unauthorized();
}
 
return await context.next();
}
 
function unauthorized() {
 
let response = new Response(
'Authentication Required',
{ status: 401 }
);
 
response.headers.set(
'WWW-Authenticate',
'Basic realm="Flood Map Viewer"'
);
 
return response;
}

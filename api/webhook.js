export default function handler(req, res) {
  console.log('=== RECEIVED REQUEST ===');
  console.log('Time:', new Date().toISOString());
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', JSON.stringify(req.headers));
  console.log('Query:', JSON.stringify(req.query));
  
  res.status(200).json({
    ok: true,
    received: true,
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url,
  });
}

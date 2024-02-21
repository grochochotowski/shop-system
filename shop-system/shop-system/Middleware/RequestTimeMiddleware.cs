using System.Diagnostics;

namespace shop_system.Middleware
{
    public class RequestTimeMiddleware : IMiddleware
    {
        private Stopwatch _stopWatch;
        private readonly ILogger<RequestTimeMiddleware> _logger;

        public RequestTimeMiddleware(ILogger<RequestTimeMiddleware> logger)
        {
            _stopWatch = new Stopwatch();
            _logger = logger;
        }
        public async void InvokeAsync(HttpContext context, RequestDelegate next)
        {
            _stopWatch.Start();
            await next.Invoke(context);
            _stopWatch.Stop();

            var elapsedMillisecods = _stopWatch.ElapsedMilliseconds;

            if (elapsedMillisecods > 4000)
            {
                var message = $"Request [{context.Request.Method}] at {context.Request.Path} took {elapsedMillisecods}ms";
                _logger.LogInformation(message);
            }
        }
    }
}

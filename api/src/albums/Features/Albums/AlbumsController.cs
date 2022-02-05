using MediatR;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace albums.Features.Albums
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlbumsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AlbumsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public Task<AlbumsResponse> Get(CancellationToken cancellationToken)
        {
            return _mediator.Send(new List.Query(), cancellationToken);
        }

         [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AlbumsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AlbumsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AlbumsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

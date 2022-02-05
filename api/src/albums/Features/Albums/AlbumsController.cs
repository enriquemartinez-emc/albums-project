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

        [HttpPost]
        public Task<AlbumResponse> Create([FromBody] Create.Command command, CancellationToken cancellationToken)
        {
            return _mediator.Send(command, cancellationToken);
        }

        [HttpPut("{id}")]
         public Task<AlbumResponse> Edit(Guid id, [FromBody] Edit.Model model, CancellationToken cancellationToken)
        {
            return _mediator.Send(new Edit.Command(model, id), cancellationToken);
        }
    }
}

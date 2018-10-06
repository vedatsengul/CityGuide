﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CityGuide.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CityGuide.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private DataContext _dataContext;

        public ValuesController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        // GET api/values
        [HttpGet]
        public async Task<ActionResult> GetValues()
        {
            var values = await _dataContext.Values.ToListAsync();
            return Ok(values);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            var value = await _dataContext.Values.FirstOrDefaultAsync(v => v.Id == id);
            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CityGuide.API.Data;
using CityGuide.API.DTOs;
using CityGuide.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CityGuide.API.Controllers
{
    [Route("api/cities")]
    [ApiController]
    public class CitiesController : ControllerBase
    {
        private IAppRepository _repository;
        private IMapper _mapper;

        public CitiesController(IAppRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult GetCities()
        {
            var cities = _repository.GetCities();
            var citiesResult = _mapper.Map<List<CityForListDTO>>(cities);
            return Ok(citiesResult);
        }

        [HttpPost]
        [Route("add")]
        public ActionResult AddCity([FromBody]City city)
        {
            _repository.Add(city);
            _repository.SaveAll();

            return Ok(city);
        }

        [HttpGet]
        [Route("detail")]
        public ActionResult GetCityById(int cityId)
        {
            var city = _repository.GetCityById(cityId);
            var cityResult = _mapper.Map<CityForDetailDTO>(city);
            return Ok(cityResult);
        }
    }
}
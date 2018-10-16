﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityGuide.API.DTOs
{
    public class PhotoForCreationDTO
    {
        public string Url { get; set; }
        public IFormFile File { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; private set; }
        public string PublicId { get; set; }

        public PhotoForCreationDTO()
        {
            DateAdded = DateTime.Now;
        }

    }
}

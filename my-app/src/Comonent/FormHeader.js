
import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css'
function FormHeader() {
 
return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">PRODUCT INVENTORY</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/savep/51">Add Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/get/51">View Products</a>
              </li>
              <li class="nav-item">
              <a class="nav-link active" href="/sel/51">Sell Products</a>
            </li>
           
              
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default FormHeader
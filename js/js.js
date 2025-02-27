/*
fil: js.js
formål: at lave javsscript til vores hjemmeside
*/

hoved.innerHTML += `
 
        <a href="" class="menu"></a>
        <input type="checkbox" id="menu-bar">
        <label for="menu-bar">Menu</label>

        <nav class="navbar">

            <a href="index.html">
                <img src="/img/logolys.png" id="headlogo" alt="logo">
            </a>

            <ul>
                <li><a href="#">Vores Øl</a>
                    <ul>
                        <li><a href="#">Beskrivelse af øllene</a></li>
                        <li><a href="testforide.html">Test hvilken øl der passer til din smag</a></li>
                        <li><a href="ourbeer.html">Alkoholfri øl produktion</a></li>
                    </ul>
                </li>
                        
                <li><a href="#">Shop</a>
                    <ul>
                        <li><a href="oversigt.html">Oversigt over øllene</a></li>
                        <li><a href="#">Abonnement</a></li>
                    </ul>
                </li>

                <li><a href="#">Om Os</a>
                    <ul>
                        <li><a href="/info.html">Vores historie</a></li>
                        <li><a href="#">Kontakt</a></li>
                    </ul>
                </li>

            </ul>

            <div class="headikoncontainer">
                <a href="shop.html">
                    <img src="/img/profile.webp" class="headikon" alt="ikon af profil">
                </a>

                <a href="#">
                    <img src="/img/search.webp" class="headikon" alt="ikon af loop til søgning af ord">
                </a>

                <a href="#">
                    <img src="/img/kurv.webp" class="headikon" alt="ikon til shoppingkurv og køb">
                </a>
            </div>
        </nav>

`

fod.innerHTML += `
<div class="footer">
            <div id="section1">
                <div>
                    <h1>Kontakt Os</h1>
                    <p>ZeroBuzz Brew</p>
                    <p>Bryggens Allé 66,</p>
                    <p>8000 Aarhus, Denmark</p>
                    <p>+45 66 00 66 11</p>
                    <p>ZeroBuzz@Brew.dk</p>
                </div>
                <div id="footerlinks">
                    <a href="abonnoment.html">Shop</a>
                    <a href="abonnoment.html">Om Os</a>
                    <a href="abonnoment.html">Vores Øl</a>
                    <a href="abonnoment.html">Abonnoment</a>
                    <a href="abonnoment.html">FAQ</a>
                </div>
            </div>
            <div id="socialmedier">
                <img src="img/fb.webp" alt="Facebook icon" width="50">
                <img src="img/ig.webp" alt="Instagram icon" width="50">
            </div>
        </div>
`
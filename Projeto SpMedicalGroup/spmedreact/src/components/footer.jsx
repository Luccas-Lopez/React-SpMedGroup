// import { render } from "react-dom"
import "../assets/css/style.css";

export default function Footer() {
    return (
        <div>
            <footer>
                <div class="footer">
                    <div class="waves">
                        <div class="wave" id="wave1"></div>
                        <div class="wave" id="wave2"></div>
                        <div class="wave" id="wave3"></div>
                        <div class="wave" id="wave4"></div>
                    </div>
                    <ul class="social_icon">
                        <li><a herf="#">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a></li>
                        <li><a herf="#">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a></li>
                        <li><a herf="#">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a></li>
                        <li><a herf="#">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a></li>
                    </ul>
                    <ul class="menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Team</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    <p>@2021 SpMedicalGroup | All Right Reserveds</p>
                    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                </div>
            </footer>
        </div>
    )
};
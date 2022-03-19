<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Stel je voor dat...</h1>
    <p>
        Invloeden kunnen twee kanten opwerken. Ze kunnen ervoor zorgen dat je, ongeacht je vaardigheden, onzeker bent
        over
        de situatie, of juist zekerder.
    </p>
</div>

<div class="content">
    <form class="item-form">
        <div class="item">
            <h2>Moment <span id="experience-index"></span> van <span id="experience-count"></span></h2>

            <label class="form-status hidden"></label>

            <p class="no-line">
                <span>Als in deze siutatie...</span>
                <br>

                <span id="experience-description" class="block"></span>
                <br>

                <span>...waarbij ik hierdoor werd beïnvloed:</span>
                <br>

                <span id="experience-factor" class="block"></span>
                <br>

                <span>...en dit dacht:</span>
                <br>

                <span id="experience-thought" class="block"></span>
                <br>

                <span>...en me daardoor zo voelde:</span>
                <br>

                <span id="experience-feeling" class="block"></span>
                <br>

                <span>...maar dit was gebeurd:</span>
                <br>

                <select id="factor-type">
                    <option value="experience">Een eerdere ervaring met een vergelijkbare situatie.</option>
                    <option value="feedback">Iemand zij iets, namelijk...</option>
                    <option value="mirror">Ik wist dat iemand anders het <span id="mirror"></span> gelukt was.</option>
                    <option value="imagination">Ik zag voor me hoe het <span id="imagination"></span> zou lukken.
                    </option>
                    <option value="fysical">Ik was <span id="physical"></span> helemaal fit.</option>
                    <option value="mental">Ik was <span id="mental"></span> al druk in m'n hoofd.</option>
                    <option value="custom">Anders, namelijk...</option>
                </select>

                <textarea id="factor-description"></textarea>

                <span>Dan had ik meer vertrouwen in de situatie gehad, en was deze mogelijk anders verlopen.</span>
            </p>
        </div>
        <label>* verplicht veld</label>
    </form>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/factors/" for="submit_experience_form" onclick="return previousExperience(saveFactorInventarisation, getCurrentFactorInventarisation)">Vorige</a>
    </div>

    <div class="middle">

    </div>

    <div class="right">
        <a class="button big" href="/experience/imagination/" for="submit_experience_form" onclick="return nextExperience(saveFactorInventarisation, getCurrentFactorInventarisation)">Volgende</a>
    </div>
</div>

<script>
    getCurrentFactorInventarisation();
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
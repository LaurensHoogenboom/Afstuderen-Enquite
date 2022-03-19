<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Beïnvloed door...</h1>
    <p>
        Wat zorgde ervoor dat je jezelf <span id="assured"></span> zeker voelde in deze situatie, <span id="but"></span>
        het <span id="succeeded"></span> lukte.
    </p>
</div>

<div class="content">
    <form class="item-form">
        <div class="item">
            <h2>Moment <span id="experience-index"></span> van <span id="experience-count"></span></h2>

            <p id="experience-description">moment beschrijving</p>
            <p id="experience-thought">gedachte</p>
            <p id="experience-feeling">gevoel</p>
            <p id="experience-action">gedrag</p>
            <p id="experience-ending">gevolg</p>

            <label class="form-status hidden"></label>

            <select id="experience-feeling">
                <option selected disabled hidden>Kies een reden</option>
                <option value="experience">Een eerdere ervaring met een vergelijkbare situatie.</option>
                <option value="feedback">Iemand zij iets, namelijk...</option>
                <option value="mirror">Ik wist dat iemand anders het <span id="mirror"></span> gelukt was.</option>
                <option value="imagination">Ik zag voor me hoe het <span id="imagination"></span> zou lukken.</option>
                <option value="fysical">Ik was <span id="physical"></span> helemaal fit.</option>
                <option value="mental">Ik was <span id="mental"></span> al druk in m'n hoofd.</option>
                <option value="custom">Anders, namelijk...</option>
            </select>

            <textarea id="factor-description" placeholder="Licht toe..."></textarea>
        </div>
        <label>* verplicht veld</label>
    </form>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/factors/" for="submit_experience_form" onclick="return previousExperience()">Vorige</a>
    </div>

    <div class="middle">

    </div>

    <div class="right">
        <a class="button big" href="/experience/factors/" for="submit_experience_form" onclick="return nextExperience()">Volgende</a>
    </div>
</div>

<script>
    getCurrentFactorInventarisation();
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
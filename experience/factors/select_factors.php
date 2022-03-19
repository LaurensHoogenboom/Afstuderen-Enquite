<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Beïnvloed door... 🪢</h1>
    <p>
        Als mensen erop vertrouwen dat zij hun gedachten, gevoelens en handelen dusdanig kunnen sturen
        dat ze hun taak kunnen uitvoeren, presteren ze vaak beter.
    </p>
</div>

<div class="content">
    <form class="item-form">
        <div class="item">
            <h2>Moment <span id="experience-index"></span> van <span id="experience-count"></span></h2>

            <label id="moment-type"></label>

            <label class="form-status hidden"></label>

            <label>In dit moment...</label>
            <label id="experience-description" class="block"></label>

            <label>...waarbij ik dit dacht:</label>
            <label id="experience-thought" class="block"></label>

            <label>...en me zo voelde:</label>
            <label id="experience-feeling" class="block"></label>

            <label>...en dit deed:</label>
            <label id="experience-action" class="block"></label>

            <label>...werd ik beïnvloed door: *</label>
            <select id="factor-type">
                <option value="experience">Een eerdere ervaring met een vergelijkbare situatie.</option>
                <option value="feedback">Iemand zij iets, namelijk...</option>
                <option value="mirror">Ik wist dat iemand anders het gelukt was.</option>
                <option value="imagination">Ik zag voor me hoe het zou lukken.</option>
                <option value="physical">Ik was helemaal fit.</option>
                <option value="mental">Ik was al druk in m'n hoofd.</option>
                <option value="custom">Anders, namelijk...</option>
            </select>

            <textarea id="factor-description" placeholder="licht eventueel toe"></textarea>

            <label id="experience-ending-caption">...met als gevolg dat:</label>
            <label id="experience-ending" class="block"></label>
        </div>

        <label>* verplicht veld</label>
    </form>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/factors/" for="submit_experience_form"
            onclick="return previousExperience(saveFactorInventarisation, loadCurrentFactorInventarisation)">Vorige</a>
    </div>

    <div class="middle">

    </div>

    <div class="right">
        <a class="button big" href="/experience/imagination/" for="submit_experience_form"
            onclick="return nextExperience(saveFactorInventarisation, loadCurrentFactorInventarisation)">Volgende</a>
    </div>
</div>

<script>
    loadCurrentFactorInventarisation();
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
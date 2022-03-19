<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Beïnvloed door...</h1>
    <p>
        Als mensen erop vertrouwen dat zij hun gedachten, gevoelens en handelen dusdanig kunnen sturen
        dat ze hun taak kunnen uitvoeren, presteren ze vaak beter.
    </p>
</div>

<div class="content">
    <form class="item-form">
        <div class="item">
            <h2>Moment <span id="experience-index"></span> van <span id="experience-count"></span></h2>

            <label class="form-status hidden"></label>

            <p>
                <span>Het moment...</span>
                <br>

                <span id="experience-description" class="block"></span>
                <br>

                <span>...waarbij ik dacht:</span>
                <br>

                <span id="experience-thought" class="block"></span>
                <br>

                <span>...en me zo voelde:</span>
                <br>

                <span id="experience-feeling" class="block"></span>
                <br>

                <span>...en dit deed:</span>
                <br>

                <span id="experience-action" class="block"></span>
                <br>

                <span id="experience-ending-caption">...met als gevolg dat:</span>
                <br>
                
                <span id="experience-ending" class="block"></span>
            </p>

            <label>
                Wat zorgde ervoor dat je jezelf <span id="assured"></span> zeker voelde in deze situatie, <span id="but"></span>
                wat je moest doen <span id="succeeded"></span> lukte. *
            </label>
            <select id="factor-type">
                <option value="experience">Een eerdere ervaring met een vergelijkbare situatie.</option>
                <option value="feedback">Iemand zij iets, namelijk...</option>
                <option value="mirror">Ik wist dat iemand anders het <span id="mirror"></span> gelukt was.</option>
                <option value="imagination">Ik zag voor me hoe het <span id="imagination"></span> zou lukken.</option>
                <option value="fysical">Ik was <span id="physical"></span> helemaal fit.</option>
                <option value="mental">Ik was <span id="mental"></span> al druk in m'n hoofd.</option>
                <option value="custom">Anders, namelijk...</option>
            </select>

            <label>Licht toe:</label>
            <textarea id="factor-description"></textarea>
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
        <a class="button big" href="/experience/factors/" for="submit_experience_form" onclick="return nextExperience(saveFactorInventarisation, getCurrentFactorInventarisation)">Volgende</a>
    </div>
</div>

<script>
    getCurrentFactorInventarisation();
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
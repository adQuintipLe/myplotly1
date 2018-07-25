<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Plotly</title>

    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">

    <script src="{{ asset('js/jquery-3.3.1.js') }}"></script>
    <script src="{{ asset('js/plotly-latest.min.js') }}"></script>
</head>
<body>
    <nav class="navbar fixed-top navbar-dark bg-success">
        <span class="navbar-brand mb-0 h1">Plotly</span>
    </nav>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-9">

            <div class="row">
                <div class="col-md-12" style="margin-top:50px">
                    <h1>PLOT CUSTOMIZE BY ME</h1>
                    <div id="customPlot"></div>
                </div>
            </div>

            <div class="row" style="margin-top:100px">
                <div class="col-md-6">
                    <h1>PLOT 1</h1>
                    <div id="tester" style="width:700px;height:350px;"></div>
                </div>
                <div class="col-md-6">
                    <h1>PLOT 2</h1>
                    <div id="tester1" style="width:700px;height:350px;"></div>
                </div>
            </div>

            <div class="row" style="margin-top:50px">
                <div class="col-md-6">
                    <h1>PLOT 3</h1>
                    <div id="tester2" style="width:700px;height:350px;"></div>
                </div>
                <div class="col-md-6">
                    <h1>PLOT 4</h1>
                    <div id="tester3" style="width:700px;height:350px;"></div>
                </div>
            </div>

            <div class="row" style="margin-top:50px">
                <div class="col-md-6">
                    <h1>PLOT 4</h1>
                    <div id="tester4" style="width:700px;height:350px;"></div>
                </div>
                <div class="col-md-6">
                    <h1>PLOT 5</h1>
                    <div id="tester5"></div>
                </div>
            </div>

            <div class="row" style="margin-top:50px">
                <div class="col-md-6">
                    <h1>PLOT 6</h1>
                    <div id="tester6" style="width:700px;height:350px;"></div>
                </div>
                <div class="col-md-6">
                    <h1>PLOT 7</h1>
                    <div id="tester7"></div>
                </div>
            </div>

        </div>
    </div>
    
    
</body>
<script src="{{ asset('js/plot.js')}}"></script>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
        }
        .calendar {
            width: 300px;
            text-align: center;
            border: 1px solid #ddd;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f36b6b;
            color: white;
            padding: 10px;
        }
        .calendar-header button {
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
        }
        .calendar-header h2 {
            margin: 0;
        }
        .calendar-body {
            padding: 10px;
        }
        .calendar-body table {
            width: 100%;
            border-collapse: collapse;
        }
        .calendar-body th,
        .calendar-body td {
            width: 14.28%;
            padding: 5px;
            text-align: center;
        }
        .calendar-body th {
            color: #f36b6b;
        }
        .highlight {
            background-color: #f36b6b;
            color: white;
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div class="calendar">
        <?php
            date_default_timezone_set('Asia/Jakarta');
            $currentDate = isset($_GET['date']) ? $_GET['date'] : date('Y-m-d');
            $currentDateTimestamp = strtotime($currentDate);
            $month = date('m', $currentDateTimestamp);
            $year = date('Y', $currentDateTimestamp);
            $day = date('d');

            if (isset($_GET['action'])) {
                if ($_GET['action'] == 'prev') {
                    $currentDateTimestamp = strtotime("-1 month", $currentDateTimestamp);
                } elseif ($_GET['action'] == 'next') {
                    $currentDateTimestamp = strtotime("+1 month", $currentDateTimestamp);
                }
                $month = date('m', $currentDateTimestamp);
                $year = date('Y', $currentDateTimestamp);
            }

            $daysInMonth = date('t', $currentDateTimestamp);
            $startDay = date('w', strtotime("$year-$month-01"));

            echo '<div class="calendar-header">';
            echo "<button onclick=\"changeMonth('prev')\">&lt;</button>";
            echo "<h2>" . date('F Y', $currentDateTimestamp) . "</h2>";
            echo "<button onclick=\"changeMonth('next')\">&gt;</button>";
            echo '</div>';
            echo '<div class="calendar-body"><table>';
            echo '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>';

            for ($i = 0; $i < $startDay; $i++) {
                echo '<td></td>';
            }

            for ($dayCounter = 1; $dayCounter <= $daysInMonth; $dayCounter++, $startDay++) {
                $isToday = ($dayCounter == date('d') && $month == date('m') && $year == date('Y'));
                echo $isToday ? "<td class='highlight'>$dayCounter</td>" : "<td>$dayCounter</td>";

                if ($startDay % 7 == 6) {
                    echo '</tr><tr>';
                }
            }

            while ($startDay % 7 != 0) {
                echo '<td></td>';
                $startDay++;
            }
            echo '</tr></table></div>';
        ?>
    </div>

    <script>
        function changeMonth(action) {
            const currentDate = "<?php echo $currentDate; ?>";
            window.location.href = `index.php?date=${currentDate}&action=${action}`;
        }
    </script>
</body>
</html>

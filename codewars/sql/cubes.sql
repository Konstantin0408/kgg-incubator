select n, cast(power(n + 1, 3) - greatest(power(n - 1, 3), 0) as int) as res from squares

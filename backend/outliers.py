# values = [1.004799273, 6.13e-06, 7.114755278, 120.5277688, 'Colorless', 0.613997908,1.758450685, 0.255472008, 2.092090468, 120.745502, 241.4468855,3.099393646, 0.044697746, 257.7175114, 22.90091727, 54.31051792, 'January',7.0]   

def outliers(values,ranges):
    outlier = []
     
    numeric_values = [value for value in values if isinstance(value, (int, float))]

    filtered_ranges = [range_val for range_val in ranges if range_val is not None]

    col_names = ['pH', 'iron', 'nitrate', 'chloride', 'turbidity', 'fluoride', 'copper', 'odor', 'sulfate', 'conductivity', 'chlorine', 'manganese', 'totalDissolvedSolids', 'waterTemp', 'airTemp', 'day']

    # column_value_mapping = dict(zip(col_names, numeric_values))

    # print(filtered_ranges)
    # print(numeric_values)
    for (value, (min,max),column) in zip(numeric_values, filtered_ranges,col_names):
        if value < min or value > max:
            d = dict()
            d['column'] = column
            d['min'] = min
            d['max'] = max
            outlier.append(d)

    return outlier


# print(outliers(values,range))

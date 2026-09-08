---
title: "Gabriel's Horn"
date: '2026-05-27'
description: "Gabriel's Horn is a shape formed by rotating y = 1/x around the x-axis and somehow has a finite volume but an infinite surface area. It works through the improper integrals and gives some insight about the Painter's Paradox it creates."
pinned: true
---

In 1641, the Italian mathematician Evangelista Torricelli discovered that by rotating the function $f(x) = \frac{1}{x}$ about the x-axis he could create a solid with a finite volume but an infinite surface area (Mancosu et al. 50). The solid shape has since been named "Gabriel's Horn" after the archangel Gabriel in Abrahamic religions who blows such a horn to announce the resurrection of the dead and the end of time (McCasland 159).  
&nbsp;  
![A golden statue of an angel blowing a horn.](/images/writing/gabriels-horn/angel_horn.png)  
&nbsp;  
A mathematical analysis of the shape's volume and surface area is a useful study of elementary calculus as an investigation covers topics including improper integrals, the comparison test, and the threshold of p-series. Beyond its pedagogical uses, the horn connects to broader mathematical concepts such as fractals and the nature of infinity.  
&nbsp;  
![A 3D rendered model of Gabriel's Horn, a trumpet-like shape that narrows infinitely to the right.](/images/writing/gabriels-horn/3d_model.png)  
_A 3D model of Gabriel's Horn (Dey)._  
&nbsp;

## Volume

To calculate the volume of Gabriel's Horn, we must understand how to calculate the volume of a solid with integral calculus. When a function $y = f(x)$ is rotated about an axis over the interval $[a, b]$, the resulting volume can be understood as an infinite stack of infinitesimally thin disks. Each disk has a radius of $f(x)$ and a thickness of $dx$, so the volume would be $\pi [f(x)]^2\,dx$. Summing these disks from x = a to x = b gives the disk method formula (Stewart 424):  
$$V = \pi \int_a^b [f(x)]^2\,dx$$  
If the interval extends to infinity the volume becomes an improper integral and can be calculated with the limit:  
$$V = \pi \lim_{t \to \infty} \int_a^t [f(x)]^2\,dx$$  
If the improper limit exists, the solid will have a finite volume despite its infinite length.  
&nbsp;  
Gabriel's Horn is defined by rotating the function $f(x) = \frac{1}{x}$ about the x-axis for $x \ge 1$. Substituting this into the disk method formula, we get:  
$$V = \pi \int_1^\infty \left(\frac{1}{x}\right)^2 dx = \pi \int_1^\infty (x^{-2})\,dx$$  
As this is an improper integral, it is evaluated by a limit:  
$$V = \pi \lim_{t \to \infty} \int_1^t (x^{-2})\,dx$$  
The antiderivative of $x^{-2}$ is $-x^{-1}$. Thus:  
$$\int_1^t (x^{-2})\,dx = \left[-\frac{1}{x}\right]_1^t = \left(-\frac{1}{t}\right) - \left(-\frac{1}{1}\right) = 1 - \frac{1}{t}$$  
Taking the limit gives:  
$$\lim_{t \to \infty} \left(1 - \frac{1}{t}\right) = 1$$  
Therefore:  
$$V = \pi \cdot 1 = \pi$$  
The volume of Gabriel's Horn is exactly π cubic units despite being infinitely long (Coll et al.). The finiteness of the volume comes from the behavior of $[f(x)]^2 = \frac{1}{x^2}$ as $x \to \infty$. Generally, for a function $f(x) = \frac{1}{x^p}$ the volume is calculated with the integral $\int_1^\infty (x^{-2p})\,dx$. Using the p-series test, this integral converges when $2p > 1$, and thus when $p > \frac{1}{2}$. For Gabriel's Horn, $p = 1$, so $2p = 2 > 1$, so the integral converges. The key reason is that the radius of the horn shrinks extremely fast such that the additional volume from the next unit of length becomes negligible. After a certain point, the horn is so narrow that extending it further adds an infinitesimally small amount to the total volume. Mathematically, the area under $[f(x)]^2 = \frac{1}{x^2}$ from 1 to infinity is finite, which is why the volume converges to the finite value of π.  
&nbsp;  
![A graph of f(x) = 1/x, a curve that drops steeply near x = 0 and flattens toward the x-axis as x increases.](/images/writing/gabriels-horn/graph.png)  
_The graph of f(x) = 1/x._  
&nbsp;  
To help conceptualize this result, compare Gabriel's Horn to a standard circular cylinder with a height of 1 and a radius of 1. The cylinder has the volume:  
$$V_{cylinder} = \pi r^2 h = \pi (1)^2 (1) = \pi$$  
The cylinder's measurements are all finite. In contrast, Gabriel's Horn stretches infinitely to the right, yet it has the same finite volume as the cylinder. Conceptually, Gabriel's Horn could be "rolled out" and fit the same amount of space as a standard circular cylinder.  
&nbsp;

## Area

For a solid defined by the curve $y = f(x)$ rotated about the x-axis from $x = a$ to $x = b$, the surface area is given by (Stewart 554):  
$$S = 2\pi \int_a^b f(x)\sqrt{1 + [f'(x)]^2}\,dx$$  
The factor $\sqrt{1 + [f'(x)]^2}$ accounts for the arc length of the curve. Intuitively, when a small segment of a curve is rotated the resulting surface has width equal to the arc length $ds = \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$. When the interval extends to infinity, we again take a limit:  
$$S = 2\pi \lim_{t \to \infty} \int_a^t f(x)\sqrt{1 + [f'(x)]^2}\,dx$$  
For Gabriel's Horn, $f(x) = \frac{1}{x}$ and $f'(x) = -\frac{1}{x^2}$. Substituting these into the formula, we get:  
$$S = 2\pi \int_1^\infty \left(\frac{1}{x}\sqrt{1 + \left(-\frac{1}{x^2}\right)^2}\right) dx = 2\pi \int_1^\infty \left(\frac{1}{x}\sqrt{1 + \frac{1}{x^4}}\right) dx$$  
This simplified integral does not have an antiderivative that can be easily derived, so instead we use the comparison test to see whether it is infinite or finite.  
&nbsp;  
For all $x \ge 1$, $\sqrt{1 + \frac{1}{x^4}} > 1$. Therefore:  
$$\frac{1}{x}\sqrt{1 + \frac{1}{x^4}} > \frac{1}{x}$$  
It follows that:  
$$S = 2\pi \int_1^\infty \left(\frac{1}{x}\sqrt{1 + \frac{1}{x^4}}\right) dx > 2\pi \int_1^\infty \left(\frac{1}{x}\right) dx$$  
Now evaluate the simpler integral:

$$\int_1^\infty \frac{1}{x}\,dx = \lim_{t \to \infty} \int_1^t \frac{1}{x}\,dx = \lim_{t \to \infty} [\ln x]_1^t$$
$$= \lim_{t \to \infty} (\ln t - \ln 1) = \lim_{t \to \infty} \ln t = \infty$$
Since the integral diverges to infinity, and original surface area integral is larger, the surface area of Gabriel's Horn must also diverge:
$$S = \infty$$
Thus, Gabriel's Horn has an infinite surface area. The determining factor of this result is $f(x) = \frac{1}{x}$ itself, not the fact that $\sqrt{1 + \frac{1}{x^4}}$ approaches 1 as $x \to \infty$. For surface area, the integrand is $f(x) \cdot 1 = \frac{1}{x}$. The exponent (1) is the boundary between convergence and divergence as $\int_1^\infty \frac{1}{x^p}\,dx$ converges only when $p > 1$. Since $p = 1$ here, the integral diverges.
&nbsp;

## Implications

The finite volume yet infinite surface area of Gabriel's Horn leads to the Painter's Paradox (Kaufman 2). Imagine we have a finite can of paint. If the can contains at least π cubic units of paint, the inside of the horn would be completely filled. However, with a finite amount of paint it would be impossible to paint in the interior of the horn because the surface area is infinite. At first glance, this seems contradictory as a finite amount of paint can fill but not coat the interior of the horn. Mathematically, covering an infinite area would require an infinite amount of material. Yet physically, as the horn narrows beyond the size of a paint molecule, the paint simply cannot enter, and the "infinite" part of the surface becomes unreachable. Thus, the paradox simply illustrates how different measurements of size, volume and surface area, behave independently for the same object.
&nbsp;
In the end, Gabriel's Horn is a gateway into questions of infinity, integral calculus, and the relationship between physical reality and mathematical analysis. For students, it offers a valuable lesson: never trust your intuition when infinity is involved.
&nbsp;
&nbsp;

## Works Cited

Coll, Vincent, and Michael Harrison. "Gabriel's Horn: A Revolutionary Tale." _Mathematics Magazine_, vol. 87, no. 4, 2014, pp. 263-275. JSTOR, https://doi.org/10.4169/math.mag.87.4.263.  
&nbsp;  
Dey, Rajashi. "Gabriel's Horn." _Soul of Mathematics_, 28 Mar. 2021, https://soulofmathematics.com/index.php/gabriels-horn/. Accessed 17 May 2026.  
&nbsp;  
Kaufman, R. "Gabriel's Horn and the Painter's Paradox in Perspective." _Ohio Journal of School Mathematics_, vol. 94, no. 1, 2023, pp. 1-5. https://doi.org/10.18061/ojsm.4192.  
&nbsp;  
Mancosu, Paolo, and Ezio Vailati. "Torricelli's Infinitely Long Solid and Its Philosophical Reception in the Seventeenth Century." _Isis_, vol. 82, no. 1, 1991, pp. 50-70. JSTOR, http://www.jstor.org/stable/233514. Accessed 22 May 2026.  
&nbsp;  
McCasland, S. Vernon. "Gabriel's Trumpet." _Journal of Bible and Religion_, vol. 9, no. 3, 1941, pp. 159-61. JSTOR, http://www.jstor.org/stable/1456405. Accessed 25 May 2026.  
&nbsp;  
Stewart, James. _Single Variable Calculus: Early Transcendentals_. Thomson Learning, Inc., 2008.

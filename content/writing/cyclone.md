---
title: 'Modeling Cyclones with Polar Coordinates'
date: '2026-03-21'
description: 'Modeling the spiral rainbands of tropical cyclones with a logarithmic polar equation. Using derivatives, you can explain why the spiral expands the way it does, then computes the arc length and enclosed area of a real storm sized example.'
pinned: true
---

## Research & Context

Tropical cyclones are a type of natural disaster that bring high winds, torrential rain, and storm surges. A tropical cyclone is defined as "[a] warm-core non-frontal synoptic-scale cyclone, originating over tropical or subtropical waters, with organized deep convection and a closed surface wind circulation about a well-defined center" (WMO 2022). The most compelling feature of a cyclone is its eye at the center which is surrounded by the eyewall, an area of extremely heavy rain and strong winds that is within 100 kilometers of the eye (Carstens et al., 2025). Beyond the eyewall, precipitation occurs in spiraling rainbands, curved bands of clouds and storms that trail away from the eye in a spiral pattern (Carstens et al., 2025). The goal of this project is to model the shape of the spiral rainbands using a polar equation.  
&nbsp;  
This type of model is used by atmospheric scientists and remote sensing researchers to understand cyclone patterns and storm intensity. Yurchak (2024) found that a spiral model of cyclones correlates with maximum wind speed at a rate of 0.95, meaning the shape of the spiral is strongly related to how powerful the storm is. These models can be used in storm risk assessment to predict potential damage from cyclone winds and rains (Yi et al., 2022).  
&nbsp;  
A radial (polar) framework is appropriate because tropical cyclones are fundamentally rotating systems centered around a single point, the eye. The winds of a tropical cyclone are composed of two components: tangential, which are spinning, and radial, which are inward and outward (Carstens et al., 2025). The two variables used in a polar equation, r (radius) and θ (angle), show these two types of winds directly by representing the distance from the center and the angle around the center. Yurchak (2024) explicitly fitted tropical cyclones to a logarithmic spiral using satellite images of hurricane rainbands, confirming that a spiral structure, which is much easier to model with a polar equation, is a key geometric feature of tropical cyclones.  
&nbsp;

## Polar Model

Cyclones can be modeled using the polar equation $r(\theta) = ae^{b\theta}$, where:  
&nbsp;

- r is the distance from the cyclone's eye in km
- θ is the angle around the storm in radians
- a is the starting distance in km
- and b is the spiral tightness factor (unitless), usually 0.1 to 0.3

&nbsp;  
This equation is reasonable because the spiral rainbands of cyclones closely follow logarithmic spirals when viewed from above. Satellite radar images fit cyclone spiral signatures using a hyperbolic-logarithmic spiral, a more complex two-dimensional spiral that combines hyperbolic and logarithmic components (Yurchak, 2024). For the purposes of this project, which models cyclones from a bird's eye view, the simpler two-dimensional logarithmic spiral serves as an appropriate approximation.  
&nbsp;  
![A logarithmic spiral graphed in Desmos, showing r = 30e^0.25θ winding outward from the origin.](/images/writing/cyclone/graph.png)  
_The polar equation graphed using Desmos with example values for parameters._  
&nbsp;

## Calculus Based Analysis

Given $r = ae^{b\theta}$, the derivative of r with respect to θ is:  
$$\frac{dr}{d\theta} = a \cdot b \cdot e^{b\theta} = b \cdot a \cdot e^{b\theta} = b \cdot r$$  
This means, so long as the radius is positive and increases, the angle will increase. The rate of increase is proportional to the current radius, creating the expanding spiral shape seen in satellite imagery.  
&nbsp;  
Additionally, the arc length is:  
$$L = \int_{\theta_1}^{\theta_2} \sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2}\,d\theta$$  
$$L = \int_{\theta_1}^{\theta_2} \sqrt{a^2 e^{2b\theta} + b^2 a^2 e^{2b\theta}}\,d\theta$$  
$$L = \int_{\theta_1}^{\theta_2} \sqrt{a^2 e^{2b\theta} (1 + b^2)}\,d\theta$$  
$$L = a\sqrt{1 + b^2} \cdot \int_{\theta_1}^{\theta_2} e^{b\theta}\,d\theta$$  
$$L = a\sqrt{1 + b^2} \cdot \left[\frac{1}{b}e^{b\theta}\right]_{\theta_1}^{\theta_2}$$  
The arc length is the total length of the spiral rainband from the starting point to the outer edge of the storm.  
&nbsp;  
The area enclosed by the cyclone would be:  
$$A = \frac{1}{2}\int r^2\,d\theta$$  
$$A = \frac{1}{2}\int_{\theta_1}^{\theta_2} a^2 e^{2b\theta}\,d\theta$$  
$$A = \frac{1}{2}\left[\frac{1}{2b}e^{2b\theta}\right]_{\theta_1}^{\theta_2}$$  
$$A = \frac{a^2}{4b}\left(e^{2b\theta_2} - e^{2b\theta_1}\right)$$  
This is the area enclosed by the equation representing the physical area the storm covers.  
&nbsp;

### Example with Real Numbers

$a = 30$ km, $b = 0.25$, $\theta_1 = 0$, $\theta_2 = 4\pi$  
&nbsp;  
Therefore, $r = 30e^{0.25\theta}$  
$$\frac{dr}{d\theta} = 0.25 \cdot 30 \cdot e^{0.25\theta} = 7.5e^{0.25\theta}$$  
Because the derivative is always positive, so long as θ increases, the radius will increase. This leads to the equation's characteristic expanding spiral shape. As the spiral expands outward, it expands faster and faster; its angular velocity increases.  
&nbsp;  
Additionally,  
$$L = 30\sqrt{1 + (0.25)^2}\left[\frac{1}{0.25}e^{b\theta}\right]_0^{4\pi}$$  
$$L = 30(1.03078)\left[4e^{\pi} - 4\right]$$  
$$L = 2738.652$$  
This means that after just two rotations, the rainband stretches over 2738 km.  
&nbsp;  
Finally,  
$$A = \frac{30^2}{4(0.25)}\left(e^{2(0.25)(4\pi)} - e^{2(0.25)(0)}\right)$$  
$$A = 900\left(e^{2\pi} - 1\right)$$  
$$A = 481{,}042.49$$  
This means that after two rotations, the cyclone sweeps over an area of over 481,000 square kilometers. This area represents the total region covered by the rainband.  
&nbsp;

## Cartesian Comparison

To compare to the Cartesian coordinate system, recall the following formulas:  
$$x = r\cos\theta$$  
$$y = r\sin\theta$$  
$$r = \sqrt{x^2 + y^2}$$  
$$\theta = \arctan\left(\frac{y}{x}\right), \text{ with attention to quadrant}$$  
Given the equation $r = ae^{b\theta}$, $x(\theta) = ae^{b\theta}\cos\theta$ and $y(\theta) = ae^{b\theta}\sin\theta$. Attempting to convert from polar to Cartesian, x and y are parametric equations. Attempting to write x as a function of y is extremely difficult, as it is difficult to isolate θ. Solving for θ in terms of y requires solving the equation $y = ae^{b\theta}\sin\theta$, which has no algebraic solution. Furthermore, because the spiral crosses any given horizontal line multiple times, x is not a single valued function of y.  
&nbsp;  
Eliminating θ leads to $x^2 + y^2 = ae^{b \cdot \arctan(y/x)}$ which mixes exponentials and inverse trig functions. Attempting to isolate y on one side of the equation would result in the parameters a and b becoming buried inside exponentials. The polar equation has several advantages. r easily gives the distance from the eye, and θ easily gives the direction from the eye. The polar equation shows immediately that the radius grows exponentially with the angle, the parameter b directly controls how quickly the spiral expands, and the parameter a directly gives the radius when θ = 1.  
&nbsp;  
Though certain information is more obvious or easy to calculate in polar form, Cartesian coordinates may still be useful in real life situations when weather maps use latitude and longitude, combining cyclone information with other geographic information, and making sure data is compatible with already existing weather models and datasets that use Cartesian coordinates.  
&nbsp;

## Conclusion

Tropical cyclones follow a logarithmic spiral, a shape that expands outwards at a rate proportional to its current radius. The equation $r = ae^{b\theta}$ captures this relationship because as the angle θ increases, the distance from the eye, r, grows exponentially. This matches satellite observations, where logarithmic spirals fit actual hurricane rainbands (Yurchak, 2024).  
&nbsp;  
The derivative $\frac{dr}{d\theta}$ reveals that the rate at which the spiral expands is proportional to its current radius. The farther from the eye the storm travels, the faster the spiral itself expands. This explains why satellite images show tight curves near the eye, but broader spread out curves at the storms' edges.  
&nbsp;  
The arc length represents the actual length of the spiral rainband from its starting point near the eyewall to the edge of the storm. This number is significant because it quantifies the total extent of cloud cover and precipitation that is associated with a single rainband.  
&nbsp;  
Polar coordinates fit this model better than Cartesian coordinates for several reasons. A polar equation naturally shows the eye of the storm at the origin while also clearly showing the distance and position of the storm from the eye. Attempting to convert the polar equation to Cartesian yields the implicit equation $x^2 + y^2 = ae^{b \cdot \arctan(y/x)}$ that is messy and difficult to work with.  
&nbsp;  
While the model shows the overall spiral shape of tropical cyclones it has multiple limitations. The model assumes that the spiral is perfectly symmetric around the eye while real cyclones have asymmetries. The model also describes shape, but not motion over time when real rainbands vary with time. Additionally, the spiral tightness determined by the parameter b is constant, when in reality b would vary with radius and angle. Finally, the model is two-dimensional and assumes a fixed center, whereas real cyclones are three dimensional and their eyes move over time.  
&nbsp;  
Despite these simplifications, the logarithmic spiral model provides a powerful and clean way to describe the shape of hurricane rainbands. It demonstrates that polar coordinates are a natural model for rotating systems like tropical cyclones. As climate change continues to warm ocean waters and intensify cyclone winds and rains (Carstens et al., 2025), understanding their structure through mathematical models is important for forecasting and disaster preparation.  
&nbsp;  
&nbsp;

## Works Cited

Carstens, J. D., Uejio, C. K., Powell, E., Jung, J., & Zonka, S. (2025). Tropical cyclones and climate change: An overview for the public health community. _Environmental Research_, _285_, 122149. https://doi.org/10.1016/j.envres.2025.122149  
&nbsp;  
WMO. (2022, December 16). _Tropical cyclone_. World Meteorological Organization. https://wmo.int/topics/tropical-cyclone  
&nbsp;  
Yurchak, B. S. (2024). Estimating the intensity of tropical cyclones from spiral signatures acquired by spaceborne SAR. _Remote Sensing_, _16_(10), 1750. https://doi.org/10.3390/rs16101750  
&nbsp;  
Yi, L., Chen Peiyan, Hui, Y., Fang Pingzhi, Ting, G., Wang Xiaodong, & Shengnan, S. (2022). Parameterized tropical cyclone precipitation model for catastrophe risk assessment in China. _Journal of Applied Meteorology and Climatology_, _61_(9), 1291-1303. https://doi.org/10.1175/jamc-d-21-0157.1
